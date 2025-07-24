import * as bcrypt from 'bcrypt';
const salt = 10;

export const hashPasswordHelper = async (plainPassword: string) => {
    try {
        return await bcrypt.hash(plainPassword, salt)
    } catch (error) {
        console.log(error);
    }
}