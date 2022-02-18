export function displayMessage(messageType, message, target) {
    const element = document.querySelector(target);

    element.innerHtml = `<div class="message ${messageType}">${message}</div>`;
}