export interface List {
    id: number;
    created_at: string;
    title: string;
    role: string;
}
export interface ListItem {
    id: number;
    created_at: string;
    name: string;
    purchased: boolean;
    extra_info: string;
    list_id: number;
    user_id: number;
    bought_by: number;
}
export interface ListMember {
    user_id: number;
    list_id: number;
    role: string;
    name: string;
    avatar: string;
}
export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}

export interface UserWithPasswordHash extends User {
    password_hash: string;
}
