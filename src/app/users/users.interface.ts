export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
}

export interface UserRow extends User{
    isEditingEnabled: boolean;
}