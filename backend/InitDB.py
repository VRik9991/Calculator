from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
import os


MONGO_PASS = os.getenv("MONGO_INITDB_ROOT_PASSWORD")
MONGO_LOGIN = os.getenv("MONGO_INITDB_ROOT_USERNAME")
MONGO_PORT = os.getenv("MONGO_PORT")
MONGO_URI = f"mongodb://{MONGO_LOGIN}:{MONGO_PASS}@localhost:{MONGO_PORT}"

async def init_db():
    client = AsyncIOMotorClient(MONGO_URI)
    await init_beanie(
        database=client["CalculatorDB"],
        document_models=[
        ]
    )