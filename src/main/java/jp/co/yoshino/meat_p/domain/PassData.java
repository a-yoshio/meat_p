package jp.co.yoshino.meat_p.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PassData {
	/**畜種Id*/
	private int livestock;
	/**部位Id*/
	private int partId;
	
}
