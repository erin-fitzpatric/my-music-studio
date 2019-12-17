export class JsonResponse {
    data: any;
    errors: any;
    meta: any;

    constructor(data: any, errors: any, meta: any) {
        this.data = data;
        this.errors = errors;
        this.meta = meta;
    }
}
