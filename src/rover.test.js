import Rover from './rover'

describe('Mars Rover', () => {
    it('Mars Rover should return a rover', () => {
        const rover = new Rover({x:1,y:1,direction:'N'});
        expect(rover.getLocation()).toBe({ x: 1, y: 1, direction: 'N' });
    })
})