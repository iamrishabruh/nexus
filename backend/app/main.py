# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, healthdata, reminders, doctors

# Create all tables (in production, use Alembic for migrations)
import asyncio
async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app = FastAPI(title="Nexus Health Tracking API")

# CORS middleware (adjust allow_origins for production!)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(healthdata.router, prefix="/healthdata", tags=["healthdata"])
app.include_router(reminders.router, prefix="/reminders", tags=["reminders"])
app.include_router(doctors.router, prefix="/doctors", tags=["doctors"])

@app.on_event("startup")
async def on_startup():
    await init_models()
    # Here you could also initialize connections to FCM or other services

@app.get("/")
async def root():
    return {"message": "Welcome to Nexus API"}
