
interface IGuildSettings {
	maxPlayers: number;
	maps: Maps[];
	ranks: Rank[];
}

interface Rank {
	roleId: string;
	points: number;
	moderator: boolean;
}

interface Maps {
	mapName: string;
}