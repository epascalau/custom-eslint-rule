export const logger = {
    log: (...args) => console.log("[logger]", ...args),
    info: (...args) => console.info("[logger]", ...args),
    error: (...args) => console.error("[logger]", ...args)
};
export default logger;
