const blogs = [
    {
        "id": "62cf020a0772dd0e3296972e",
        "title": "Hello, World!",
        "content": "Questo sito è diventato statico con successo!",
        "date": "2022-07-14",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Vespa_Scooter.jpg/1200px-Red_Vespa_Scooter.jpg",
        "author": "Matteo Camillo Ludovico"
    },
    {
        "id": "xqgqsww8p6yzmg5yp3peqk57gm",
        "title": "Sample Text",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan pellentesque scelerisque. Integer eu nisl nisl. Duis faucibus a arcu ut placerat. Ut sodales mi sed interdum sodales. Praesent faucibus diam sit amet elit fermentum vehicula. Quisque at elementum arcu. Suspendisse potenti. Nulla diam felis, blandit quis nibh quis, finibus molestie tellus. Nam scelerisque justo ac sollicitudin dapibus. Maecenas in pretium augue, eget molestie sapien. Ut rhoncus eros nec auctor sodales.\n\nPhasellus sagittis quam a nibh elementum tincidunt non nec magna. Nunc id magna imperdiet, imperdiet nunc lacinia, elementum sapien. Aenean blandit convallis semper. Praesent suscipit mollis libero, et iaculis tellus ultricies euismod. Nullam malesuada metus in leo sodales convallis. Nam eu consectetur nibh. Quisque vitae quam facilisis, porta elit vel, viverra nunc. Duis auctor massa non augue pretium bibendum. In a nulla a nunc convallis pulvinar at nec lorem. Nam convallis, sapien id sagittis aliquam, neque orci sagittis enim, vel lacinia est velit et leo. Cras suscipit tellus ac diam sollicitudin, at auctor erat dictum. Aenean risus felis, efficitur sit amet rutrum vel, laoreet ut dui. Nullam dui augue, pharetra et aliquet sit amet, tincidunt a turpis. Nulla scelerisque neque ac cursus suscipit. Nam semper tincidunt libero ut posuere. Sed ac augue lobortis, feugiat magna a, aliquam dolor.",
        "date": "2004-07-05",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Vespa_Scooter.jpg/1200px-Red_Vespa_Scooter.jpg",
        "author": "Matteo Camillo Ludovico"
    },
    {
        "id": "h00a9dqz8f76rp0m34ec35cfzj",
        "title": "Sample Text",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan pellentesque scelerisque. Integer eu nisl nisl. Duis faucibus a arcu ut placerat. Ut sodales mi sed interdum sodales. Praesent faucibus diam sit amet elit fermentum vehicula. Quisque at elementum arcu. Suspendisse potenti. Nulla diam felis, blandit quis nibh quis, finibus molestie tellus. Nam scelerisque justo ac sollicitudin dapibus. Maecenas in pretium augue, eget molestie sapien. Ut rhoncus eros nec auctor sodales.\n\nPhasellus sagittis quam a nibh elementum tincidunt non nec magna. Nunc id magna imperdiet, imperdiet nunc lacinia, elementum sapien. Aenean blandit convallis semper. Praesent suscipit mollis libero, et iaculis tellus ultricies euismod. Nullam malesuada metus in leo sodales convallis. Nam eu consectetur nibh. Quisque vitae quam facilisis, porta elit vel, viverra nunc. Duis auctor massa non augue pretium bibendum. In a nulla a nunc convallis pulvinar at nec lorem. Nam convallis, sapien id sagittis aliquam, neque orci sagittis enim, vel lacinia est velit et leo. Cras suscipit tellus ac diam sollicitudin, at auctor erat dictum. Aenean risus felis, efficitur sit amet rutrum vel, laoreet ut dui. Nullam dui augue, pharetra et aliquet sit amet, tincidunt a turpis. Nulla scelerisque neque ac cursus suscipit. Nam semper tincidunt libero ut posuere. Sed ac augue lobortis, feugiat magna a, aliquam dolor.",
        "date": "2004-07-05",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Vespa_Scooter.jpg/1200px-Red_Vespa_Scooter.jpg",
        "author": "Matteo Camillo Ludovico"
    },
    {
        "id": "g6a3y3m79i16ez8gxw5l2ducki",
        "title": "Sample Text",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan pellentesque scelerisque. Integer eu nisl nisl. Duis faucibus a arcu ut placerat. Ut sodales mi sed interdum sodales. Praesent faucibus diam sit amet elit fermentum vehicula. Quisque at elementum arcu. Suspendisse potenti. Nulla diam felis, blandit quis nibh quis, finibus molestie tellus. Nam scelerisque justo ac sollicitudin dapibus. Maecenas in pretium augue, eget molestie sapien. Ut rhoncus eros nec auctor sodales.\n\nPhasellus sagittis quam a nibh elementum tincidunt non nec magna. Nunc id magna imperdiet, imperdiet nunc lacinia, elementum sapien. Aenean blandit convallis semper. Praesent suscipit mollis libero, et iaculis tellus ultricies euismod. Nullam malesuada metus in leo sodales convallis. Nam eu consectetur nibh. Quisque vitae quam facilisis, porta elit vel, viverra nunc. Duis auctor massa non augue pretium bibendum. In a nulla a nunc convallis pulvinar at nec lorem. Nam convallis, sapien id sagittis aliquam, neque orci sagittis enim, vel lacinia est velit et leo. Cras suscipit tellus ac diam sollicitudin, at auctor erat dictum. Aenean risus felis, efficitur sit amet rutrum vel, laoreet ut dui. Nullam dui augue, pharetra et aliquet sit amet, tincidunt a turpis. Nulla scelerisque neque ac cursus suscipit. Nam semper tincidunt libero ut posuere. Sed ac augue lobortis, feugiat magna a, aliquam dolor.",
        "date": "2004-07-05",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Vespa_Scooter.jpg/1200px-Red_Vespa_Scooter.jpg",
        "author": "Matteo Camillo Ludovico"
    },
    {
        "id": "n3l8v1w0m1n7w87yrqon7h2kdk",
        "title": "Sample Text",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan pellentesque scelerisque. Integer eu nisl nisl. Duis faucibus a arcu ut placerat. Ut sodales mi sed interdum sodales. Praesent faucibus diam sit amet elit fermentum vehicula. Quisque at elementum arcu. Suspendisse potenti. Nulla diam felis, blandit quis nibh quis, finibus molestie tellus. Nam scelerisque justo ac sollicitudin dapibus. Maecenas in pretium augue, eget molestie sapien. Ut rhoncus eros nec auctor sodales.\n\nPhasellus sagittis quam a nibh elementum tincidunt non nec magna. Nunc id magna imperdiet, imperdiet nunc lacinia, elementum sapien. Aenean blandit convallis semper. Praesent suscipit mollis libero, et iaculis tellus ultricies euismod. Nullam malesuada metus in leo sodales convallis. Nam eu consectetur nibh. Quisque vitae quam facilisis, porta elit vel, viverra nunc. Duis auctor massa non augue pretium bibendum. In a nulla a nunc convallis pulvinar at nec lorem. Nam convallis, sapien id sagittis aliquam, neque orci sagittis enim, vel lacinia est velit et leo. Cras suscipit tellus ac diam sollicitudin, at auctor erat dictum. Aenean risus felis, efficitur sit amet rutrum vel, laoreet ut dui. Nullam dui augue, pharetra et aliquet sit amet, tincidunt a turpis. Nulla scelerisque neque ac cursus suscipit. Nam semper tincidunt libero ut posuere. Sed ac augue lobortis, feugiat magna a, aliquam dolor.",
        "date": "2004-07-05",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Vespa_Scooter.jpg/1200px-Red_Vespa_Scooter.jpg",
        "author": "Matteo Camillo Ludovico"
    }
]