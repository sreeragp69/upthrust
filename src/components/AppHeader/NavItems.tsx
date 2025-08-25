import { Menu } from "lucide-react";
import React from "react";
import MenuItem from "./MenuItem";
import CourseItem from "./CourseItem";
import { AppHeaderItem } from "../../types/AppHeader.type";

interface ActionButtonsProps {
  setActive: (active: string | null) => void;
  AppHeaderData: AppHeaderItem[];
  active: string | null;
}
const NavItems = ({
  setActive,
  AppHeaderData,
  active,
}: ActionButtonsProps) => {
  return (
    <div className="hidden lg:flex items-center ">
      <div className="flex items-center ">
        {AppHeaderData.map((item: AppHeaderItem) => (
          <MenuItem
            key={item.id}
            item={item.name}
            active={active}
            path={item.path}
            setActive={setActive}
          >
            {item.isDropdown && item.dropdownList && (
              <div className="grid grid-cols-2 gap-6 p-4 text-sm">
                {item.dropdownList.map((course, index) => (
                  <CourseItem
                    key={index}
                    title={course.courseName}
                    href={`/courses/${course.courseName
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    src={course.courseImg}
                    description={course.description}
                  />
                ))}
              </div>
            )}
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
