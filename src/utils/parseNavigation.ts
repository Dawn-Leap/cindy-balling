import rawLinks from "../data/pageNavigation.json";

interface Link {
    name: string;
    path: string;
    isDropdown?: boolean;
    isButton?: boolean;
    dropdownItems?: DropdownItem[];
    hasAnnouncements?: boolean;
}

interface DropdownItem {
    name: string;
    path: string;
    section?: number;
}

export const links: Link[] = rawLinks as unknown as Link[];
