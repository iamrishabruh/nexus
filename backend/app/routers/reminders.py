from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_reminders():
    return {"message": "This is the reminders endpoint"}
