type LogItem = {
    url: string
    time: string
    extra?: any
}

const size = 10;
const logQueue: LogItem[] = []

export function addLog(entry: LogItem ) {
    if (logQueue.length >= size) {
        logQueue.shift();
    }
    logQueue.push(entry);
}

export function getLogs() {
    return [...logQueue]
}