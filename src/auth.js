const users = [
    { username: 'kim@test.com', password: '123', name: 'Kim' },
    { username: 'lee@test.com', password: '456', name: 'Lee' },
    { username: 'park@test.com', password: '789', name: 'Park' },
    { username: '1@test.com', password: '111', name: '홍길동' }
]

export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
}