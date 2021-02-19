/// <summary>
/// Produces optional, URL-friendly version of a title, "like-this-one". 
/// hand-tuned for speed, reflects performance refactoring contributed
/// by John Gietzen (user otac0n) 
/// </summary>
const URLFriendly = (string) => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}
const apiErrorMessage = ({status, message, data}) => {
    return {
        status: status || "error",
        message: message,
        data: data || null
    }
}
const apiSuccessMessage = ({status, message, data}) => {
    return {
        status: status || "success",
        data: data || null
    }
}
module.exports.URLFriendly = URLFriendly;
module.exports.apiErrorMessage = apiErrorMessage;
module.exports.apiSuccessMessage = apiSuccessMessage;