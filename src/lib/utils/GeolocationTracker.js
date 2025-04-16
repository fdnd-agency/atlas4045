export class GeolocationTracker {
    constructor() {
        if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser!');
        }
    }

    trackPosition(callback) {
        return navigator.geolocation.watchPosition(
            (position) => callback(null, position),
            (error) => callback(error, null)
        );
    }

    clearWatch(watchId) {
        navigator.geolocation.clearWatch(watchId);
    }

    async getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    async findNearbyLocations(coords, radiusInMeters = 1) {
        const response = await fetch('/api/address');
        if (!response.ok) {
            throw new Error('Failed to fetch target locations');
        }
        const targetLocations = await response.json();
    
        return targetLocations.filter((targetLocation) => {
            const distanceToLocation = this.#calculateDistance(
                coords.latitude,
                coords.longitude,
                targetLocation.latitude,
                targetLocation.longitude
            );
            return distanceToLocation <= radiusInMeters;
        });
    }

    #calculateDistance(latitude1, longitude1, latitude2, longitude2) {
        const earthRadiusInMeters = 6371e3; // Earth's radius in meters
        const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

        const latitude1InRadians = degreesToRadians(latitude1);
        const latitude2InRadians = degreesToRadians(latitude2);
        const latitudeDifferenceInRadians = degreesToRadians(latitude2 - latitude1);
        const longitudeDifferenceInRadians = degreesToRadians(longitude2 - longitude1);

        const haversineFormula =
            Math.sin(latitudeDifferenceInRadians / 2) * Math.sin(latitudeDifferenceInRadians / 2) +
            Math.cos(latitude1InRadians) *
                Math.cos(latitude2InRadians) *
                Math.sin(longitudeDifferenceInRadians / 2) *
                Math.sin(longitudeDifferenceInRadians / 2);
        const angularDistance = 2 * Math.atan2(Math.sqrt(haversineFormula), Math.sqrt(1 - haversineFormula));

        return earthRadiusInMeters * angularDistance; // Distance in meters
    }
}