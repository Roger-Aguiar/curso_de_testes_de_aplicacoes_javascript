const execute = require('./calculator');
describe('Global operations', () => {
    it('should throw an error if one or more parameters are not a number', () => {
        expect(() => {
            execute('', '', '+')
        }).toThrowError();
    });

    it('should complete the operation with success if one or both parameters are string.', () => {
        expect(execute('2', '2', '+')).toBe(4);
    });
});
describe('Sum operations', () => {
    it("should sum 2 and 2 and return 4 if operator is '+'", () => {
        expect(execute(2, 2, '+')).toBe(4);
    });
});
describe('Subtract operations', () => {
    it("should subtract 2 and 2 and return 0 if operator is '-'", () => {
        expect(execute(2, 2, '-')).toBe(0);
    });
});
describe('Multiplication operations', () => {
    it("should times 2 and 2 and return 4 if operator is '*'", () => {
        expect(execute(2, 2, '*')).toBe(4);
    });
});
describe('Division operations', () => {
    it("should divide 2 and 2 and return 1 if operator is '/'", () => {
        expect(execute(2, 2, '/')).toBe(1);
    });
});


