import { User } from "./user.class";

export class Lesson {
    id: number;
    user: User;
    dateAssigned: Date;
    lessonDateTime: Date;
    location: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    status: string;

    constructor(id: number = 0, user: User = new User(), dateAssigned: Date = new Date(), lessonDateTime: Date = new Date(),
        location: string = '', address: string = '', city: string = '', state: string = '',
        zip: string = '', status: string = '') {
        this.id = id;
        this.user = user;
        this.dateAssigned = dateAssigned;
        this.lessonDateTime = lessonDateTime;
        this.location = location;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.status = status;
    }
}
