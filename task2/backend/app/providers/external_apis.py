from typing import Any

import requests


def get_users() -> tuple[Any, int]:
    response = requests.get("https://jsonplaceholder.typicode.com/users")
    return response.json(), response.status_code


def get_user(user_id: int) -> tuple[Any, int]:
    response = requests.get(f"https://jsonplaceholder.typicode.com/users/{user_id}")
    return response.json(), response.status_code


def get_posts_by_user(user_id: int) -> tuple[Any, int]:
    response = requests.get(f"https://jsonplaceholder.typicode.com/posts?userId={user_id}")
    return response.json(), response.status_code


def get_photos_by_user(user_id: int) -> tuple[Any, int]:
    response = requests.get(f"https://jsonplaceholder.typicode.com/photos?albumId={user_id}")
    return response.json(), response.status_code
