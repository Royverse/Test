import {Injectable} from '@angular/core';
import {OnesourceIcon} from './onesource-icons';

@Injectable({
    providedIn: 'root'
})
export class OnesourceIconsRegistry {

    private registry = new Map<string, string>();

    public registerIcons(icons: OnesourceIcon[]): void {
        icons.forEach((icon: OnesourceIcon) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        if (!this.registry.has(iconName)) {
            console.warn(`We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`);
        }
        return this.registry.get(iconName);
    }
}
