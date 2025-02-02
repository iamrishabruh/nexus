from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_doctors():
    return {"message": "This is the doctors endpoint"}
