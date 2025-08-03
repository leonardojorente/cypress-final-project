import { faker } from '@faker-js/faker'

class Utils {
    generateRandomAlphaNumericString(length) {
      return faker.string.alphanumeric(length)
    }

    generateRandomString(length) {
      return faker.string.alpha(length)
    }

    generateRandomNumberString(length) {
      return faker.string.numeric(length)
    }
}
export default new Utils()