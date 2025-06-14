export function formatData(timestamp: number): string {
    return new Date(timestamp).toDateString("en-us", {
        year:"numeric",
        month:"short",
        day:"numeric"
    })
}