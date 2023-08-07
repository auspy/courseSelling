"use client";
import muiTheme from "@/helper/muiTheme";
import {
  CreateCourseInputProps,
  FormCourse,
  UpdateCourseInputProps,
} from "@/types/types.course";
import { ThemeProvider } from "@emotion/react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ButtonThird from "../buttons/ButtonThird";
import { CategoryEnum } from "@/types/types.course";
import { dummyCategoryList } from "@/data/dummy/data.lists";
import { convertCamelCaseToSentence } from "@/helper/common";
import { useMutation } from "@apollo/client";
import { CREATE_COURSE, UPDATE_COURSE } from "@/api/graphql/gql";
import { useRecoilState } from "recoil";
import atomToast from "@/state/atoms/atom.toast";
const FormNewCourse = ({
  title = "",
  price = 0,
  published = false,
  description = "",
  category = CategoryEnum.design,
  imageLink,
  benefits = [],
  _id,
}: FormCourse) => {
  const toUpdate = _id ? true : false;
  console.log("toUpdate", toUpdate);
  const [titlee, setTitle] = useState<string>(title);
  const [desc, setDesc] = useState<string>(description);
  const [amt, setAmt] = useState(price);
  const [catego, setCategory] = useState<CategoryEnum>(
    category || CategoryEnum.design
  );
  const [image, setImage] = useState<string>(
    imageLink || "https://picsum.photos/id/0/1280/720"
  );
  // https://picsum.photos/id/0/1280/720
  //   const [benefitList, setBenefits] = useState<string[]>(benefits);
  const [publish, setPublished] = useState<boolean>(published);
  const [clicked, setClicked] = useState<boolean>(false);
  const [, setToast] = useRecoilState(atomToast);

  // CREATE/UPDATE COURSE
  const sendData: UpdateCourseInputProps | CreateCourseInputProps = {
    title: titlee,
    description: desc,
    price: Number(amt),
    category: catego,
    imageLink: image,
    published: publish,
  };
  const variables: {
    input: UpdateCourseInputProps | CreateCourseInputProps;
    id?: string;
  } = {
    input: sendData,
  };
  if (toUpdate) {
    variables["id"] = _id;
  }
  const [mutateCourse, { loading, error, data }] = useMutation(
    toUpdate ? UPDATE_COURSE : CREATE_COURSE,
    { variables }
  );
  const onCourseUpdated = (data: any) => {
    if (data?.updateCourse?.status === "success") {
      setToast({
        text: "Course Updated Successfully 👍",
        type: "success",
        secs: 5000,
      });
    } else {
      setToast({
        text: "Course Update Failed 😢. " + (data?.updateCourse?.msg || ""),
        type: "error",
        secs: 5000,
      });
    }
    setClicked(false);
  };
  const onCourseCreated = (data: any) => {
    console.log("data", data);
    if (data?.addCourse?.status === "success") {
      setToast({
        text: "Course Created Successfully 👍",
        type: "success",
        secs: 5000,
      });
    } else {
      setToast({
        text: "Course Creation Failed 😢. " + (data?.addCourse?.msg || ""),
        type: "error",
        secs: 5000,
      });
    }
    setClicked(false);
  };
  const onError = () => {
    setToast({
      text: "Course Creation Failed 😢. " + error?.message ?? "",
      type: "error",
      secs: 5000,
    });
    setClicked(false);
  };
  const handleButtonClick = () => {
    setClicked(true);
    mutateCourse({
      onCompleted: toUpdate ? onCourseUpdated : onCourseCreated,
      onError,
    });
  };
  const buttonDisabled =
    titlee.length < 4 ||
    desc.length < 10 ||
    loading ||
    !catego ||
    !image ||
    amt < 0 ||
    amt > 10000 ||
    titlee.length > 100 ||
    desc.length > 250 ||
    image.length > 250 ||
    image.length < 10 ||
    clicked;
  console.log(loading, buttonDisabled, data);
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <FormGroup className="fcfs mt30">
          <TextField
            sx={{ marginBottom: 2, width: "100%", maxWidth: "35ch" }}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            required={true}
            type="text"
            //   helperText={usernameHelperText()}
            color={"primary"}
            value={titlee}
            error={titlee.length > 0 && titlee?.length < 4}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            sx={{ marginBottom: 2, width: "100%", maxWidth: "35ch" }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            required={true}
            type="number"
            helperText={"0 for free"}
            color={"primary"}
            value={amt}
            // error={price == 0}
            onChange={(e) => {
              console.log(e.target.value);
              setAmt(e.target.value as unknown as number);
            }}
          />
          <FormControl
            sx={{ marginBottom: 2, width: "100%", maxWidth: "35ch" }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={catego || CategoryEnum.design}
              required={true}
              label="Age"
              onChange={(e) => {
                setCategory(e.target.value as CategoryEnum);
              }}
            >
              {dummyCategoryList.map((cat, index) => (
                <MenuItem key={index + cat} value={cat}>
                  {convertCamelCaseToSentence(cat)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ marginBottom: 2, width: "100%", maxWidth: "72ch" }}
            maxRows={4}
            multiline={true}
            id="outlined-basic"
            label="Description"
            value={desc}
            variant="outlined"
            type="text"
            helperText={"Maximum 250 characters"}
            color={"primary"}
            error={(desc.length > 0 && desc?.length < 10) || desc.length > 250}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <TextField
            sx={{ marginBottom: 2, width: "100%", maxWidth: "72ch" }}
            id="outlined-basic"
            label="image"
            required={true}
            value={image}
            variant="outlined"
            type="text"
            helperText={"Maximum 250 characters"}
            color={"primary"}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <FormControlLabel
            sx={{ marginBottom: 2 }}
            control={
              <Switch
                checked={publish}
                onChange={(e) => {
                  setPublished(e.target.checked);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            labelPlacement="start"
            label="Publish"
          />
          <ButtonThird
            disabled={buttonDisabled}
            loading={loading || clicked}
            value={_id ? "Update" : "Create"}
            buttonTextStyle={{ backgroundColor: "var(--bg)" }}
            onClick={handleButtonClick}
          />
        </FormGroup>
      </ThemeProvider>
    </>
  );
};

export default FormNewCourse;
