package jp.co.yoshino.meat_p.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * お肉の詳細データドメイン.
 * @author atsuko.yoshino
 *
 */
@Data
@NoArgsConstructor
public class MeatData {
	/**お肉ID*/
	private int id;
	/**英名*/
	private String eName;
	/**日本名*/
	private String jName;
	/**部位名*/
	private String partName;
	/**かたさ*/
	private String hardType;
	/**人気度*/
	private int point;
	/**写真*/
	private String picture;
	/**説明文*/
	private String description;
	/**畜種名*/
	private String livestockEName;

	public MeatData(int id, String eName, String jName, String partName, String hardType, int point, String picture,
			String description, String livestockName) {
		super();
		this.id = id;
		this.eName = eName;
		this.jName = jName;
		this.partName = partName;
		this.hardType = hardType;
		this.point = point;
		this.picture = picture;
		this.description = description;
		this.livestockEName = livestockName;
	}
	
	
	
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}
	public String getjName() {
		return jName;
	}
	public void setjName(String jName) {
		this.jName = jName;
	}
	
}
