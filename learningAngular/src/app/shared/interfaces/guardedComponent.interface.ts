export interface GuardedComponent {
    canEscape(): { value: string, msg: string };
}