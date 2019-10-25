export const getBadRequestErrors = err => {
    const errors = err.response.data.errors.map(error => error.defaultMessage);
    return errors.join(";\n")
}