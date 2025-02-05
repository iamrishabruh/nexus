import asyncio
from sqlalchemy import text
from app.database import AsyncSessionLocal

async def check_schema():
    async with AsyncSessionLocal() as session:
        result = await session.execute(text("SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users';"))
        columns = result.fetchall()
        print("Columns in 'users' table:")
        for column in columns:
            print(column)

asyncio.run(check_schema())
