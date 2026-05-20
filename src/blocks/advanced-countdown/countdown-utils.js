export function getTimeLeft(dueDateTime) {
	const now = new Date().getTime();
	const due = dueDateTime
		? new Date(dueDateTime).getTime()
		: now + 86400000 * 15;
	const diff = Math.max(0, due - now);
	return {
		days: Math.floor(diff / 86400000),
		hours: Math.floor((diff % 86400000) / 3600000),
		minutes: Math.floor((diff % 3600000) / 60000),
		seconds: Math.floor((diff % 60000) / 1000),
		totalMs: diff,
	};
}

export function getTotalDuration(startDateTime, dueDateTime) {
	const start = startDateTime
		? new Date(startDateTime).getTime()
		: new Date().getTime() - 86400000;
	const due = dueDateTime
		? new Date(dueDateTime).getTime()
		: new Date().getTime() + 86400000 * 15;
	return Math.max(1, due - start);
}

export function getProgress(startDateTime, dueDateTime) {
	const now = new Date().getTime();
	const start = startDateTime
		? new Date(startDateTime).getTime()
		: now - 86400000;
	const due = dueDateTime
		? new Date(dueDateTime).getTime()
		: now + 86400000 * 15;
	const total = Math.max(1, due - start);
	const elapsed = Math.max(0, Math.min(total, now - start));
	return elapsed / total;
}

export function pad2(n) {
	return String(n).padStart(2, "0");
}

export function formatTime12(dateStr) {
	if (!dateStr) return "--:-- --";
	const d = new Date(dateStr);
	let h = d.getHours();
	const m = String(d.getMinutes()).padStart(2, "0");
	const ampm = h >= 12 ? "PM" : "AM";
	h = h % 12 || 12;
	return `${String(h).padStart(2, "0")}:${m} ${ampm}`;
}
