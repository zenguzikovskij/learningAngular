import { Component } from "@angular/core";

export interface GuardedComponent extends Component {
    canEscape(): boolean;
}