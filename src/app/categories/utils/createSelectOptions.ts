import {
  CategorySelectData,
  CategoryChildrenSelectData,
  ISelectOption,
} from "../types";

export default function createSelectOptions(
  data: CategorySelectData[] | CategoryChildrenSelectData[] | ISelectOption[],
  additionalKeys?: string[]
): ISelectOption[] {
  return data?.map((item) => {
    let option: ISelectOption = { value: item.id, label: item.name };

    if (additionalKeys) {
      additionalKeys.forEach((key) => {
        if (key in item) {
          option[key] = item[key];
        }
      });
    }

    return option;
  });
}
