# Suspense Example

비동기 처리가 이루어지는 컴포넌트를 Suspense로 감싸면서 fallback Skeleton UI 제공 샘플

## UserList JSON Sample

URL : https://dummyjson.com/

아래 표기된 유저 정보는 dummyjson의 자원입니다.

```
// GET: https://dummyjson.com/users

users: [
  {
    username: string,
    phone: string,
    image: string
  },
  ... other users data
]
```

## Preview

![skeleton](https://github.com/jiwooproity/suspense-example/assets/58384366/757dfb24-4a92-4ad8-8380-e2a644a10331)
