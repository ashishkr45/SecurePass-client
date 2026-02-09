export default function PasswordGenerator(
	length = 12,
	numAllowed = true,
	charAllowed = true
) {
	const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const chars = "£$&()*+[]@#^-_!?";
	const nums = "0123456789";

	let pool = alphabets;
	if (numAllowed) pool += nums;
	if (charAllowed) pool += chars;

	if (!pool.length) return "";

	const randomValues = new Uint32Array(length);
	crypto.getRandomValues(randomValues);

	let password = "";

	for (let i = 0; i < length; i++) {
		password += pool[randomValues[i] % pool.length];
	}

	return password;
}
