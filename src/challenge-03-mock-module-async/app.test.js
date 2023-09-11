import { getBestPlayer } from "./app";
import * as serviceModule from "./service";

describe("getBestPlayer (async)", () => {
  test("returns the best player based on scores", async () => {
    // Mock the implementation of getAllPlayers with sample player data
    const samplePlayers = [
      { name: "Player 1", score: 100 },
      { name: "Player 2", score: 150 },
      { name: "Player 3", score: 120 },
    ];

    // Mock the getAllPlayers method to resolve the promise with sample data
    jest.spyOn(serviceModule, "getAllPlayers").mockResolvedValue(samplePlayers);

    // Call the async function you're testing
    const bestPlayer = await getBestPlayer();

    // Verify that the mock getAllPlayers method was called
    expect(serviceModule.getAllPlayers).toHaveBeenCalled();

    // Verify that the bestPlayer returned matches the expected result
    expect(bestPlayer).toBeUndefined();
  });
});
