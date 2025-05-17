import { validateDate } from "./validateDate";
import { errors } from "../utils/dictionarty";

describe("validateDate", () => {
    test("Корректный формат ДД.ММ.ГГГГ должен пройти", () => {
        expect(validateDate("25.12.2025")).toEqual({
            isValid: true,
            message: errors.date.valid,
        });
    });

    test("Некорректный формат (буквы) должен не пройти", () => {
        expect(validateDate("аб.вг.дедж")).toEqual({
            isValid: false,
            message: errors.date.pattern,
        });
    });

    test("Некорректный формат (специальные символы) должен не пройти", () => {
        expect(validateDate("25-12-2025")).toEqual({
            isValid: false,
            message: errors.date.pattern,
        });
    });

    test("Прошедшая дата должна не пройти", () => {
        expect(validateDate("01.01.2000")).toEqual({
            isValid: false,
            message: errors.date.past,
        });
    });

    test("Дата с недопустимыми символами должна не пройти", () => {
        expect(validateDate("25.1X.2025")).toEqual({
            isValid: false,
            message: errors.date.invalidCharacters,
        });
    });

    test("Пустая дата должна не пройти", () => {
        expect(validateDate("")).toEqual({
            isValid: false,
            message: errors.date.required,
        });
    });
});
