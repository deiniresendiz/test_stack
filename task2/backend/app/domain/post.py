from pydantic import BaseModel


class Post(BaseModel):
    id: int
    userId: int
    title: str
    body: str
