import * as _ from 'lodash';

export class Browser {
    private isMobileCached: boolean;
    private userAgent: string;

    constructor() {
        this.userAgent = window.navigator.userAgent.toLowerCase();
    }

    public isMobile(): boolean {
        if (this.isMobileCached == null) {
            const mobileUserAgentRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
            this.isMobileCached = mobileUserAgentRegex.test(this.userAgent);
        }
        return this.isMobileCached;
    }

    private getOrientationType(): string {
        const obj = (<any>screen).orientation || (<any>screen).mozOrientation || (<any>screen).msOrientation;
        return obj ? obj.type : null;
    }

    public isLandscape(): boolean {
        const orientationType = this.getOrientationType();
        return !this.isPortraitOrientationType(orientationType) &&
            (this.isLandscapeOrientationType(orientationType) || this.isLandscapeByDimensions());
    }

    public isPortrait(): boolean {
        const orientationType = this.getOrientationType();
        return !this.isLandscapeOrientationType(orientationType) &&
            (this.isPortraitOrientationType(orientationType) || !this.isLandscapeByDimensions());
    }

    private isPortraitOrientationType(orientationType: string): boolean {
        return orientationType === 'portrait-primary' ||
            orientationType === 'portrait-secondary';
    }

    private isLandscapeOrientationType(orientationType: string): boolean {
        return orientationType === 'landscape-primary' ||
            orientationType === 'landscape-secondary';
    }

    private isLandscapeByDimensions(): boolean {
        return window.innerWidth > window.innerHeight;
    }
}

export let browser = new Browser();
