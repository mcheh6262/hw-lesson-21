--1
CREATE TABLE contacts(
    ID INT PRIMARY KEY NOT NULL,
    FIRST_NAME TEXT NOT NULL,
    LAST_NAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    PHONE TEXT NOT NULL,
    TIME_OF_CREATION TEXT NOT NULL
    );

    --2
    DROP TABLE contacts

    CREATE TABLE contacts(
        ID INT PRIMARY KEY NOT NULL,
        FIRST_NAME TEXT NOT NULL,
        LAST_NAME TEXT NOT NULL,
        EMAIL TEXT NOT NULL,
        PHONE TEXT NOT NULL,
        TIME_OF_CREATION TEXT NOT NULL
        );

        --3
        INSERT INTO contacts (id,FIRST_NAME,LAST_NAME,EMAIL,PHONE,TIME_OF_CREATION)
VALUES (1, 'chedvi', 'baum', '4150155@gmail.com', '0504150155', 'good time');
INSERT INTO contacts (id,FIRST_NAME,LAST_NAME,EMAIL,PHONE,TIME_OF_CREATION)
VALUES (2, 'yehda', 'cohen', '0527653591', 'yeedy10@gmail.com','good time'); 
INSERT INTO contacts (id,FIRST_NAME,LAST_NAME,EMAIL,PHONE,TIME_OF_CREATION)
VALUES (3, 'leati', 'lev', '086526262', '4130041@gmail.com', 'good time'); 

--4
UPDATE contacts
SET PHONE = '0504130041'
WHERE id=3

--5
INSERT INTO contacts (id,first_name,last_name,email,phone,time_of_creation)
VALUES (4, 'rikey', 'shecter', 'rikey100900@gmail.com', '0504100900', 'good time');

--6
DELETE FROM contacts
WHERE id=4

--7
SELECT * FROM contacts