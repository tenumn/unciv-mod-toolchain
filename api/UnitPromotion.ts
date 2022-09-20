import { Registry } from "./Registry";
import { Unique } from "./Unique";
import { UnitType } from "./UnitType";

export class UnitPromotion extends Registry {
	constructor(name: string) {
		super("UnitPromotions");
		this.put("name", name);
	}

	/**
	 * @zh
	 * 添加特质
	 * @param unique
	 * @returns
	 */
	public unique(unique: Unique): UnitPromotion {
		this.put("uniques", unique.get("uniques"));
		return this;
	}

    /**
     * @zh
     * 需要的前置升级类型
     * @param prerequisite 
     * @returns 
     */
    public require(...prerequisite: (UnitPromotion | string)[]): UnitPromotion {
        let _data: string[] = this.get("prerequisites") || [];
        for (let pre of prerequisite) {
            let _pre = pre instanceof UnitPromotion ? pre.get("name") : pre;
            _data.push(_pre);
        }
        this.put("prerequisites", _data);
		return this;
    }

	/**
	 * @zh
	 * 绑定到单位类型
	 * @param unitType
	 */
	public bindToUnitType(...unitType: (UnitType | string)[]): UnitPromotion {
		let _data: string[] = this.get("unitTypes") || [];
		for (let type of unitType) {
			let _type = type instanceof UnitType ? type.get("name") : type;
			_data.push(_type);
		}
		this.put("unitTypes", _data);
        return this;
	}
}
