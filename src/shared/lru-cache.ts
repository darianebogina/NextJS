import {LogItem} from "./types"

const SIZE = 10;
const logQueue: LogItem[] = [];

export function addLog(entry: LogItem ) {
    if (logQueue.length >= SIZE) {
        logQueue.shift();
    }
    logQueue.push(entry);
}

export function getLogs() {
    return [...logQueue];
}