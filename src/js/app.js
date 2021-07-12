export default class Validator {
    static validateUsername(username) {
        if (username) {
            const validCharExp = /(?<all>[a-z\d\-_]+)/i;
            const invalidNumCountExp = /[\d]{3,}/;
            const invalidStartEndExp = /(?<start>^[\d_-]*).+?(?<end>[\d_-]*$)/;

            const { start, end } = username.match(invalidStartEndExp).groups;
            if (start || end) {
                console.log('invalid char at start/end of the username');
                return false;
            }

            const { all } = username.match(validCharExp).groups;
            if (all !== username) {
                console.log('invalid char in username');
                return false;
            }

            if (invalidNumCountExp.test(username)) {
                console.log('too much numbers in a row');
                return false;
            }

            return true;
        }
        throw new Error('empty value');
    }
}
