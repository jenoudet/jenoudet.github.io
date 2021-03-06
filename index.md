---
layout: default
---

## Projects 

### LLVML - A Machine Learning framework for LLVM loop unrolling
Designed and implemented a Machine Learning pipeline to predict the optimal unroll factor of a loop in LLVM. Focused on the Feature Extraction step of the pipeline. Our Neural Network predicted the top two unroll factors in over 95% of cases. The paper can be found [here](https://drive.google.com/file/d/1jvSS3FYq7l4NvZA9LoVWhc9icNXR7bOR/view?usp=sharing){:target="_blank"}.
![Pipeline](images/pipeline.jpg)

### Various Natural Language Processing tasks 
Implemented three different Machine Learning models to tackle the [CommonsenseQA](https://www.tau-nlp.org/commonsenseqa){:target="_blank"} problem, a general [Conversational Entailment](https://www.aclweb.org/anthology/W09-3930/){:target="_blank"} problem, and an Everyday Actions in Text (EAT) problem - described as "Given a short natural language story, determine whether the story is physically plausible, and if implausible, which sentence is the breakpoint." 
We achieved an accuracy of 63%, 55%, and 62%, respectively. The paper can be found [here](https://drive.google.com/file/d/1bV3wNY6OgIMXWMPDYI6-TytcHOhjUtXD/view?usp=sharing){:target="_blank"}.

### My personal website
Built this website based on the template found in [this](https://github.com/pages-themes/minimal){:target="_blank"} Github repository. The source code can be found [here](https://github.com/jenoudet/jenoudet.github.io){:target="_blank"}.

### InstaClone
Implemented an Instagram clone based on a Python Flask backend controller using a REST API. Backend communicated with a MySQL database. Built the frontend in ReactJS and published the project on AWS.

### MapReduce Server 
Implemented a MapReduce server capable of processing an arbitrary number of files in Python. Used one master controller and an arbitrary number of workers communicating through a REST API using Python socket and thread libraries extensively.
