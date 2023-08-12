interface IProperties {
    id: number;
    price: number;
    rentFrequency: "monthly" | "yearly" | "weekly" | "daily"
    location: {
        id: number
        name: string;
    }[] // get location eg. UAE
    coverPhoto: {
        id: string;
        url: string;
    }
    contactName: string;
    type: "property"
    baths: number
    area: number
    rooms: number
    phoneNumber: {
        phone: string
    }

}