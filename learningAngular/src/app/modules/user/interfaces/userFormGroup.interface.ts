import { AbstractControl, FormGroup } from "@angular/forms";
import { User } from "./user.interface";

export interface UserFormGroup extends FormGroup {
    value: User

    controls: {
        id?: AbstractControl,
        firstName: AbstractControl,
        lastName: AbstractControl,
        age: AbstractControl,
        gender: AbstractControl,
        email: AbstractControl,
        department: AbstractControl,
        company: AbstractControl,
        imageUrl?: AbstractControl
    }
}