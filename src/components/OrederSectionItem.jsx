import {Box, Grid, Typography} from "@mui/material";
import {persianPrice} from "../share/functions";
import OrederSectionItemContent from "./OrederSectionItemContent";
import {useSelector} from "react-redux";
import {cart} from "../pwa/features/cart/cartSlice";

const OrederSectionItem = ({orders}) => {
  const products = useSelector(cart);
  const selectedItems = products.selectedItems;
  // // console.log("selectedItems");
  // console.log(selectedItems[0]);

  const findCategoryTitle = () => {
    const category = selectedItems.map((item) => item.categoryTitle);
    category.filter((value, index) => selectedItems.indexOf(value) !== index);
    return category;
  };
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const newCategory = removeDuplicates(findCategoryTitle());

  const reducerPrice = (category) => {
    return category.map((item) => {
      const sumPrice = selectedItems.map(
        (data) => data.categoryTitle == item && data.quantity * data.price
      );

      let reducePrice2 = sumPrice.reduce((acc, curr) => acc + curr, 0);
      // console.log(reducePrice2);
      return reducePrice2;
      // console.log(item),
      // console.log("item"),
    });
  };

  const categorysPrice = reducerPrice(newCategory);
  // console.log(categorysPrice);

  // console.log(orders)
  return (
    <>
      <Grid
        bgcolor='white'
        style={{
          width: "100%",
          borderRadius: "30px",
        }}>
        <Box
          sx={{
            p: "1.5rem",
          }}>
          <Grid
            container
            sx={{
              border: "1px solid rgb(235, 241, 242)",
              borderRadius: "12px",
              bgcolor: "rgb(237, 252, 255)",
              display: "flex",
              justifyContent: "space-between",
            }}>
            {orders && orders.map((item,i)=>(
              <>
              {/* {console.log(item)} */}
              <Grid
                  key={item.id}
                  item
                  m='1rem .7rem '
                  display='flex'
                  justifyContent='space-between'
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}>
                  <>
                    <Typography fontSize='16px' fontFamily='Vazir'>
                      {item.name}
                    </Typography>

                    <Typography fontSize='12px' fontFamily='Vazir'>
                      درمجموع
                      <span
                        style={{
                          fontFamily: "Vazir",
                          fontWeight: "bold",
                        }}>
                        {persianPrice(item.value)} تومان
                        {/* {console.log(item)} */}
                      </span>
                    </Typography>
                  </>
                </Grid>
                <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
                  {item.service_list.map((item2, i) => (
                    <>
                    {console.log(item2)}
                 
                        <>
           
                          <OrederSectionItemContent
                             key={item2.id}

                            id={item2.id}
                            cost={item2.value}
                            title={item2.service_type}
                            quantity={item2.qty}
                            data={item2}
                          />
                        </>
                      
                    </>
                  ))}
                </Grid>
              </>
            ))

            }
            {newCategory.map((item, i) => (
              <>
              
                <Grid
                  key={item + i}
                  item
                  m='1rem .7rem '
                  display='flex'
                  justifyContent='space-between'
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}>
                  <>
                    <Typography fontSize='16px' fontFamily='Vazir'>
                      {item}
                    </Typography>

                    <Typography fontSize='12px' fontFamily='Vazir'>
                      درمجموع
                      <span
                        style={{
                          fontFamily: "Vazir",
                          fontWeight: "bold",
                        }}>
                        {persianPrice(categorysPrice[i])} تومان
                      </span>
                    </Typography>
                  </>
                </Grid>
                <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
                  {selectedItems.map((item2, i) => (
                    <>
                      {item2.categoryTitle == item && (
                        <>
           
                          <OrederSectionItemContent
                             key={item + i}

                            id={item2.id}
                            cost={item2.price}
                            title={item2.job}
                            data={item2}
                          />
                        </>
                      )}
                    </>
                  ))}
                </Grid>
              </>
            ))}

            {/* {selectedItems.map((item, i) => (
              <>
                <Grid
                  key={i}
                  item
                  m='1rem .7rem '
                  display='flex'
                  justifyContent='space-between'
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}>
                  {spread.length && (
                    <>
                      <Typography fontSize='16px' fontFamily='Vazir'>
                        {item.categoryTitle}
                      </Typography>

                      <Typography fontSize='12px' fontFamily='Vazir'>
                        درمجموع
                        <span
                          style={{
                            fontFamily: "Vazir",
                            fontWeight: "bold",
                          }}>
                          {persianPrice(products.total)} تومان
                        </span>
                      </Typography>
                    </>
                  )}
                </Grid>
                <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
                  <OrederSectionItemContent
                    id={item.id}
                    cost={item.price}
                    title={item.job}
                    data={item}
                  />
                </Grid>
              </>
            ))} */}

            {/* <Grid
              item
              m='1rem .7rem '
              display='flex'
              justifyContent='space-between'
              xs={12}
              sm={12}
              md={12}
              lg={12}>
              <Typography fontSize='16px' fontFamily='Vazir'>
                {selectedItems.title}
              </Typography>
              <Typography fontSize='12px' fontFamily='Vazir'>
                درمجموع
                <span
                  style={{
                    fontFamily: "Vazir",
                    fontWeight: "bold",
                  }}>
                  {persianPrice(products.total)} تومان
                </span>
              </Typography>
            </Grid> */}
            {/* {selectedItems.map((item, i) => (
            
            ))} */}
            {/* <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid>
            <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid>
            <Grid item m='1rem .7rem ' xs={12} sm={12} md={12} lg={12}>
              <OrederSectionItemContent />
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default OrederSectionItem;
