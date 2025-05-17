import { validateCityName } from "./validateCity";
import { errors } from "../utils/dictionarty";

describe("validateCity", () => {
    test("Город с опасными символами должен не пройти", () => {
        expect(validateCityName("Нью <Йорк")).toEqual({
            isValid: false,
            message: errors.city.escape,
        });
    });

    test("Город со специальными символами должен пройти", () => {
        expect(validateCityName("Ağrı")).toEqual({
            isValid: true,
            message: errors.city.valid,
        });
    });

    test("Город с восклицательным знаком должен пройти", () => {
        expect(validateCityName("Сен-Луи-ду-Ха! Ха!")).toEqual({
            isValid: true,
            message: errors.city.valid,
        });
    });

    test("Город с одной буквой должен пройти", () => {
        expect(validateCityName("А")).toEqual({
            isValid: true,
            message: errors.city.valid,
        });
    });

    test("Пустое название города должно не пройти", () => {
        expect(validateCityName("")).toEqual({
            isValid: false,
            message: errors.city.empty,
        });
    });

    test("Город с недопустимыми символами должен не пройти", () => {
        expect(validateCityName("Нью@Йорк")).toEqual({
            isValid: false,
            message: errors.city.invalid,
        });
    });
});
