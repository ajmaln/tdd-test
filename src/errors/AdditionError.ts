
export default class AdditionError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'AdditionError'
    }
}