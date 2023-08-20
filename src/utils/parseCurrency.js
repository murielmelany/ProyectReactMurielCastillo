export const parseToCLP = (price) => {
    return price.toLocaleString("es-CL", {style:"currency", currency:"CLP"});
}