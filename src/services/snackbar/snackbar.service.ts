let _enqueueSnackbar: any = null
let _closeSnackbar: any = null

interface IsnackbarPostiion {
    vertical: string
    horizontal: string
}

export class SnackbarService {
    constructor(enqueueSnackbar: any, closeSnackbar: any) {
        _enqueueSnackbar = enqueueSnackbar
        _closeSnackbar = closeSnackbar
    }
}

function showSnackbar(
    message: string,
    variant: any,
    anchorOrigin?: IsnackbarPostiion
) {
    return _enqueueSnackbar(message, {
        variant: variant,
        autoHideDuration: 3000,
        anchorOrigin: {
            vertical: anchorOrigin?.vertical ? anchorOrigin.vertical : 'bottom',
            horizontal: anchorOrigin?.horizontal
                ? anchorOrigin.horizontal
                : 'right',
        },
    })
}

export function ShowSuccessSnackBar(
    message: string,
    anchorOrigin?: IsnackbarPostiion
) {
    showSnackbar(message, 'success', anchorOrigin)
}

export function ShowErrorSnackBar(
    errorObject: any,
    message = 'Something Went wrong.',
    anchorOrigin?: IsnackbarPostiion
) {
    if (
        errorObject &&
        errorObject.error &&
        typeof errorObject.error === 'string'
    ) {
        showSnackbar(errorObject.error, 'error', anchorOrigin)
    } else {
        typeof message === 'string'
            ? showSnackbar(message, 'error', anchorOrigin)
            : showSnackbar('Something Went wrong.', 'error')
    }
}

export function ShowInfoSnackBar(message: string) {
    showSnackbar(message, 'info')
}

export function closeSnackBar(id: any) {
    _closeSnackbar(id)
}
