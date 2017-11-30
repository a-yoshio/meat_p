/**
 * 
 */
package jp.co.yoshino.meat_p;

import static org.hamcrest.CoreMatchers.is;

import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import jp.co.yoshino.meat_p.domain.Meat;
import jp.co.yoshino.meat_p.service.SearchService;

/**
 * @author atsuko.yoshino
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SearchServiceTest {
	@Autowired
	public SearchService searchService;

//	/**
//	 * 最初のテストメソッドを呼ぶ前に呼び出されるメソッド
//	 * @throws java.lang.Exception
//	 */
//	@BeforeClass
//	public static void setUpBeforeClass() throws Exception {
//		System.out.println("setUpBeforeClass");
//	}
//
//	/**
//	 * テストメソッドがすべて呼び出されたあとに呼び出されるメソッド
//	 * @throws java.lang.Exception
//	 */
//	@AfterClass
//	public static void tearDownAfterClass() throws Exception {
//	}
//
//	/**
//	 * 各テストメソッドが呼び出される前に実行されるメソッド
//	 * @throws java.lang.Exception
//	 */
//	@Before
//	public void setUp() throws Exception {
//	}
//
//	/**
//	 * 各テストメソッドが呼びだされたあとに実行するメソッド
//	 * @throws java.lang.Exception
//	 */
//	@After
//	public void tearDown() throws Exception {
//	}

	/**
	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findByKeyWordAndCondition(java.lang.String, java.lang.String, java.lang.String)}.
	 */
	@Test
	public void testFindByKeyWordAndCondition() {
		String livestockId= "0";
		String hardLev= "3";
		String keyword= "e";
		List<Meat> meatDataList= searchService.findByKeyWordAndCondition(livestockId, hardLev, keyword);
		assertThat("FindByKeyWordAndCondition failed", "肩ロース芯", is(meatDataList.get(0).getJ_name()));
	}
	@Test
	public void testFindByKeyWordAndCondition2() {
		String livestockId= "1";
		String hardLev= "";
		String keyword= "";
		List<Meat> meatDataList= searchService.findByKeyWordAndCondition(livestockId, hardLev, keyword);
		assertThat("FindByKeyWordAndCondition2 failed1", 8, is(meatDataList.size()));
		assertThat("FindByKeyWordAndCondition2 failed2", "バラ", is(meatDataList.get(0).getJ_name()));
	}
	@Test
	public void testFindByKeyWordAndCondition3() {
		String livestockId= "";
		String hardLev= "4";
		String keyword= "";
		List<Meat> meatDataList= searchService.findByKeyWordAndCondition(livestockId, hardLev, keyword);
		assertThat("FindByKeyWordAndCondition3 failed1", 3, is(meatDataList.size()));
		assertThat("FindByKeyWordAndCondition3 failed2", "スペアリブ"
				+ "", is(meatDataList.get(0).getJ_name()));
	}
	@Test
	public void testFindByKeyWordAndCondition4() {
		String livestockId= "";
		String hardLev= "";
		String keyword= "a";
		List<Meat> meatDataList= searchService.findByKeyWordAndCondition(livestockId, hardLev, keyword);
		assertThat("FindByKeyWordAndCondition4 failed1", 8, is(meatDataList.size()));
		assertThat("FindByKeyWordAndCondition4 failed2", "はねした/もみじ/ざぶとん", is(meatDataList.get(0).getJ_name()));
	}
	
	/**
	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findByLivestockAndPartId(int, java.lang.String)}.
	 */
	@Test
	public void testFindByLivestockAndPartId() {
		
	}

//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findByIdFromMeatTable(java.lang.String, java.lang.String)}.
//	 */
//	@Test
//	public void testFindByIdFromMeatTable() {
//		fail("Not yet implemented");
//	}
//
//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findAllLivestcokData()}.
//	 */
//	@Test
//	public void testFindAllLivestcokData() {
//		fail("Not yet implemented");
//	}
//
//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findAllHardLevelData()}.
//	 */
//	@Test
//	public void testFindAllHardLevelData() {
//		fail("Not yet implemented");
//	}
//
//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findAllPart(java.lang.String)}.
//	 */
//	@Test
//	public void testFindAllPart() {
//		fail("Not yet implemented");
//	}
//
//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#findPartByPartId(java.lang.String, java.lang.String)}.
//	 */
//	@Test
//	public void testFindPartByPartId() {
//		fail("Not yet implemented");
//	}
//
//	/**
//	 * Test method for {@link jp.co.yoshino.meat_p.service.SearchService#getCookingMenu(java.lang.String)}.
//	 */
//	@Test
//	public void testGetCookingMenu() {
//		fail("Not yet implemented");
//	}

}
