"use client"

import {
    OrganizationSwitcher,
    UserButton,
    useOrganization
} from "@clerk/nextjs"
import { SearchInput } from "./search-input"
import { InviteButton } from "./invite-button"
import { NotificationSection } from "./notification-section"
import { Help } from "./help-section"

export const Navbar = () => {

    const { organization } = useOrganization();

    return (
        <div className="flex items-center gap-x-4 p-5">
            <div className="hidden lg:flex lg:flex-1">
                <SearchInput />
            </div>
            <div className="block lg:hidden flex-1">
                <OrganizationSwitcher
                    hidePersonal
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                maxWidth: "376px",
                            },
                            organizationSwitcherTrigger: {
                                padding: "6px",
                                width: "100%",
                                borderRadius: "8px",
                                border: "1px solid #E5E7EB",
                                justifyContent: "space-between",
                                backgroundColor: "white",
                            }
                        }
                    }}
                />
            </div>
            {organization && (
                <InviteButton />
            )}

            <Help />
            {/*TODO: Help Menu Create */}
            <NotificationSection />
            {/*TODO: Notofication Menu Create */}

            <div>
                <UserButton />
            </div>
        </div>
    )
}